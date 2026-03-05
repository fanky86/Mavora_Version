export default function handler(req, res) {
  res.status(200).json({
    latestVersion: 2,
    apkUrl: "https://domainkamu.com/Mavora.apk"
  });
}
