import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
  res.send("DemoWidget server running");
});

app.get("/widget.js",(req,res)=>{
  res.type("application/javascript");
  res.send(`
    console.log("DemoWidget widget loaded");

    const bubble = document.createElement("button");
    bubble.innerText = "AI";
    bubble.style.position="fixed";
    bubble.style.bottom="20px";
    bubble.style.right="20px";
    bubble.style.padding="15px";
    bubble.style.borderRadius="50%";
    bubble.style.background="#000";
    bubble.style.color="#fff";
    bubble.style.zIndex="9999";

    bubble.onclick = ()=>{
      window.open("https://demowidget.com/demo","_blank");
    }

    document.body.appendChild(bubble);
  `);
});

app.get("/demo",(req,res)=>{
  res.send(`
  <h1>AI Demo</h1>
  <p>This will launch the demo flow.</p>
  <button onclick="alert('Voice AI launching from GoHighLevel')">
  Start AI Voice Demo
  </button>
  `);
});

app.post("/lead",(req,res)=>{
  console.log("Lead:",req.body);
  res.json({status:"ok"});
});

app.listen(3000,()=>{
  console.log("Server running");
});
