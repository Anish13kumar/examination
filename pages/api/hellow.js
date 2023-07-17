export default function handler(req, res) {
    console.log(req.socket.remoteAddress)
    res.status(200).json({ text: 'Hello' });
  }