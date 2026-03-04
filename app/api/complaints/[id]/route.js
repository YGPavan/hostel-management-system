import pool from "@/lib/db";

export async function PATCH(request, { params }) {
  console.log("PATCH called with params:", params);
  
  try {
    // params handling - could be promise or plain object
    let paramId;
    if (params && typeof params.then === 'function') {
      paramId = (await params).id;
    } else {
      paramId = params.id;
    }
    
    console.log("paramId raw:", paramId, typeof paramId);
    
    const id = Number(paramId);
    console.log("id after Number:", id, isNaN(id));

    // Check if ID is valid
    if (isNaN(id)) {
      console.log("Invalid ID, paramId was:", paramId);
      return Response.json(
        { error: "Invalid complaint ID", received: paramId },
        { status: 400 }
      );
    }

    // log raw body for debugging problems with malformed JSON
    const raw = await request.text();
    console.log("PATCH body text:", raw);
    
    if (!raw || raw.trim() === '') {
      return Response.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }
    
    let body;
    try {
      body = JSON.parse(raw);
    } catch (err) {
      console.log("JSON parse error:", err.message);
      return Response.json(
        { error: `Invalid JSON body: ${err.message}`, raw },
        { status: 400 }
      );
    }
    
    console.log("Parsed body:", body);
    const { status } = body;
    console.log("Status value:", status, typeof status);
    
    if (typeof status !== "string" || !status) {
      return Response.json(
        { error: "Missing or invalid status", receivedStatus: status, receivedType: typeof status },
        { status: 400 }
      );
    }

    // Check if complaint exists first
    const checkResult = await pool.query(
      "SELECT id FROM complaints WHERE id = $1",
      [id]
    );

    if (checkResult.rows.length === 0) {
      return Response.json(
        { error: `Complaint with ID ${id} not found` },
        { status: 404 }
      );
    }

    const result = await pool.query(
      "UPDATE complaints SET status = $1 WHERE id = $2 RETURNING id, status",
      [status, id]
    );

    console.log("UPDATED ROW:", result.rows);

    if (!result.rows[0]) {
      return Response.json(
        { error: "Failed to update status" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      updated: result.rows[0],
    });
  } catch (error) {
    console.error("PATCH ERROR:", error);
    return Response.json(
      { error: `Failed to update status: ${error.message}` },
      { status: 500 }
    );
  }
}
