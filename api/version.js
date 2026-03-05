export default function handler(req, res) {
  res.status(200).json({
    latestVersion: 2,
    apkUrl: "https://github.com/fanky86/Mavora_Version/releases/download/v1.1/Mavora.apk"
  });
}
