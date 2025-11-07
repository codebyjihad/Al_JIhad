export const codeSnippets = [
  // 🟨 1. JavaScript ES6
  {
    id: 1,
    title: "JavaScript ES6",
    language: "javascript",
    code: `// Problem 1
function totalFine(fare) {
  if (typeof fare !== 'number' || fare <= 0) {
    return 'Invalid';
  }

  const serviceCharge = fare * 0.2;
  const service = 30;
  const totalFine = fare + serviceCharge + service;
  return totalFine;
}

// Problem 2
function onlyCharacter(str) {
  if (typeof str !== 'string') {
    return 'Invalid';
  }

  const character = str.split(' ').join('').toUpperCase();
  return character;
}

// Problem 3
function bestTeam(player1, player2) {
  if (typeof player1 !== 'object' || typeof player2 !== 'object') {
    return 'Invalid';
  }

  const team1Score = player1.foul + player1.cardY + player1.cardR;
  const team2Score = player2.foul + player2.cardY + player2.cardR;

  if (team1Score > team2Score) {
    return player2.name;
  } else if (team1Score < team2Score) {
    return player1.name;
  } else {
    return 'Tie';
  }
}

// Problem 4
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return 'Invalid';
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Problem 5
function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return 'Invalid';
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let finalScore = 0;
  let pass = 0;
  let fail = 0;

  for (let mark of marks) {
    finalScore += mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  const average = Math.round(finalScore / marks.length);
  return { finalScore: average, pass, fail };
}`,
  },

  // ⚛️ 2. React + Firebase example
  {
    id: 2,
    title: "React Example (with Validation)",
    language: "javascript",
    code: `import React, { useState } from "react";

function ControlField() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handlePasswordChange = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
    if (newPass.length < 6) {
      setError("Password must be 6 characters or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Enter Email"
          required
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="Enter Your Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
}

export default ControlField;`,
  },

  // 🧩 3. Express + MongoDB
  {
    id: 3,
    title: "Express + MongoDB API Setup",
    language: "javascript",
    code: `import express from "express";
import cors from "cors";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = "***********************************************************************";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple CRUD server is running");
});

async function run() {
  try {
    await client.connect();
    const userDB = client.db("usersDB");
    const usersCollection = userDB.collection("users");

    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    app.patch("/users/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      };
      const result = await usersCollection.updateOne(query, update);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(" Connected to MongoDB!");
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(\` Server running on port \${port}\`);
});`,
  },
];
