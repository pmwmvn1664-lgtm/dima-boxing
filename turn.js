const U="b9f7b576b5b9a0cf02f31caa";
const P="wAjOGIMcRqu9R0dq";
const ICE=[
 {urls:"stun:stun.relay.metered.ca:80"},
 {urls:"turn:global.relay.metered.ca:80",username:U,credential:P},
 {urls:"turn:global.relay.metered.ca:80?transport=tcp",username:U,credential:P},
 {urls:"turn:global.relay.metered.ca:443",username:U,credential:P},
 {urls:"turns:global.relay.metered.ca:443?transport=tcp",username:U,credential:P}
];
