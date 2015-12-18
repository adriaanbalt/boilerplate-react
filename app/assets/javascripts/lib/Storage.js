import jsonp from 'jsonp';
import request from 'superagent';

export default {
    loadJson( o ) {
      request
        .get(o.file_path)
        .set('Content-Type', 'application/json')
        .end(function(err, res){
          o.callback( JSON.parse(res.text) );
        });
    }
};
