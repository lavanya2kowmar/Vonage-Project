var apiKey = "47549241";
var sessionId = "1_MX40NzU0OTI0MX5-MTY1OTY3ODkwODUyOH5kSnc4azZTYzBlWkt4V1VJb3NnU1BINHN-fg";
var token = "T1==cGFydG5lcl9pZD00NzU0OTI0MSZzaWc9Y2IyOTkyOTgyZmI5NzhhN2E0NTVlYjQ4NDllOTAyYjUyZmFiN2MyZDpzZXNzaW9uX2lkPTFfTVg0ME56VTBPVEkwTVg1LU1UWTFPVFkzT0Rrd09EVXlPSDVrU25jNGF6WlRZekJsV2t0NFYxVkpiM05uVTFCSU5ITi1mZyZjcmVhdGVfdGltZT0xNjU5Njc4OTQyJm5vbmNlPTAuNDU1ODg3MjMzNDk2ODIwMjUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY1OTY4MjUzOSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
// (optional) add server code here
initializeSession();
  
function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }