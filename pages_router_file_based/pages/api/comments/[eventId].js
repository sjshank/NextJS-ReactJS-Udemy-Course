export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email || !name || !text) {
      res.status(422).json({ message: "Invalid data." });
      return;
    }

    console.log(email + " - " + name + " - " + text);
    res.status(201).json({ message: "Success !" });
  }

  if (req.method === "GET") {
    const _comments = [
      {
        id: "c1",
        name: "Saurabh",
        text: "This event was awesome",
      },
      {
        id: "c2",
        name: "Shankariya",
        text: "This event was awesome",
      },
    ];

    res.status(201).json({ comments: _comments });
  }
}
