import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    // Validate that role is provided
    if (!role) {
      return Response.json(
        { error: "Role is required" },
        { status: 400 }
      );
    }

    // Validate that role is either student or admin
    if (role !== "student" && role !== "admin") {
      return Response.json(
        { error: "Invalid role" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "SELECT email, role FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (result.rows.length === 0) {
      return Response.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Validate that the user's role matches the requested role
    if (user.role !== role) {
      return Response.json(
        { error: `Invalid credentials for ${role} login` },
        { status: 401 }
      );
    }

    return Response.json(user);
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return Response.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
