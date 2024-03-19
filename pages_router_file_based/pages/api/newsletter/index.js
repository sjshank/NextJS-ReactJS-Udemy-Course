export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    if (!email) {
      res.status(422).json({ message: "Invalid email." });
      return;
    }
    res.status(201).json({ message: "Success !" });
  } else {
    res.status(201).json({ message: "Get-Success" });
  }
}
