import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const exists = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (exists.rows.length > 0) {
      return Response.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    await pool.query(
      "INSERT INTO users (email, password, role) VALUES ($1, $2, $3)",
      [email, password, role]
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return Response.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}