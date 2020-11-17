function discordrpc() {

  if (!document.getElementById("botid").value) return alert("Vous n'avez pas mis l'id de l'application");
  if (!document.getElementById("details").value) return alert("Vous n'avez pas mis de details");
  if (!document.getElementById("largeImageKey").value) return alert("Vous n'avez pas mis le nom de la grande image");
  var botid = document.getElementById("botid").value;
  var details = document.getElementById("details").value;
  var largeImageKey1 = document.getElementById("largeImageKey").value;
  var state1 = document.getElementById("state").value;
  if (!document.getElementById("largeImageText").value) { var largeImageText1 = ".." } else {
  var largeImageText1 = document.getElementById("largeImageText").value;
}
if (!document.getElementById("smallImageKey").value) { var smallImageKey1 = "null" } else {
  var smallImageKey1 = document.getElementById("smallImageKey").value;
}
if (!document.getElementById("smallImageText").value) { var smallImageText1 = ".." } else {
  var smallImageText1 = document.getElementById("smallImageText").value;
}
  var joinSecret1 = document.getElementById("joinSecret").value;
  var matchSecret1 = document.getElementById("matchSecret").value;
  var partySize1 = new Number(document.getElementById("partySize").value);
  var partyMax1 = new Number(document.getElementById("partyMax").value);
  
  const RPC = require("discord-rpc");
  const rpc = new RPC.Client({
    transport: "ipc"
  });
  
  rpc.on("ready", () => {
    rpc.setActivity({
      details: details,
      state: state1,
      startTimestamp: new Date(),
      largeImageKey: largeImageKey1,
      largeImageText: largeImageText1,
      smallImageKey: smallImageKey1,
      smallImageText: smallImageText1,
      joinSecret: joinSecret1,
      matchSecret: matchSecret1,
      partySize: partySize1,
      partyMax: partyMax1
    });
    console.log("Rpc start")
  });
  
  rpc.login({
    clientId: botid
  });
  }