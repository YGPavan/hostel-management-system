import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

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

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return Response.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}