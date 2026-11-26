const TURN_USER="b9f7b576b5b9a0cf02f31caa";
const TURN_PASS="wAjOGIMcRqu9R0dq";
const ICE=[
 {urls:"stun:stun.relay.metered.ca:80"},
 {urls:"turn:global.relay.metered.ca:80",username:TURN_USER,credential:TURN_PASS},
 {urls:"turn:global.relay.metered.ca:80?transport=tcp",username:TURN_USER,credential:TURN_PASS},
 {urls:"turn:global.relay.metered.ca:443",username:TURN_USER,credential:TURN_PASS},
 {urls:"turns:global.relay.metered.ca:443?transport=tcp",username:TURN_USER,credential:TURN_PASS}
];
