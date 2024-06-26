function introspectAccessToken(r) {
    r.subrequest("/_oauth2_send_request",
    function(reply) {
            if (reply.status == 200) {
                var response = JSON.parse(reply.responseText);
                if (response.active == true) {
                    r.return(204); // Token is valid, return success code
                } else {
                    r.return(403); // Token is invalid, return forbidden code
                }
            } else {
                r.return(401); // Unexpected response, return 'auth required'
            }
        }
    );
}

export default { introspectAccessToken }
