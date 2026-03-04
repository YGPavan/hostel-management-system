import pool from "@/lib/db";

/* GET ALL COMPLAINTS */
export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM complaints ORDER BY created_at DESC"
    );

    return Response.json(result.rows);
  } catch (error) {
    console.error("GET /complaints error:", error);

    // 🔴 IMPORTANT: always return JSON
    return Response.json(
      { error: "Failed to fetch complaints" },
      { status: 500 }
    );
  }
}

/* CREATE COMPLAINT */
export async function POST(req) {
  try {
    const { title, description } = await req.json();

    if (!title || !description) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "INSERT INTO complaints (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("POST /complaints error:", error);

    return Response.json(
      { error: "Failed to create complaint" },
      { status: 500 }
    );
  }
}