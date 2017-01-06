var root = [].slice.call(document.getElementsByTagName("script")).pop().src.split("/").slice(0,-1).join("/")+"/";

document.write(
  '<script src="'+root+'bootstrap/js/jquery.min.js"></script>'+
  '<script src="'+root+'bootstrap/js/bootstrap.min.js"></script>'+
  '<meta content="initial-scale=1" name="viewport">'+
  '<!-- Latest compiled and minified CSS -->'+
  '<link href="'+root+'bootstrap/css/bootstrap.min.css" rel="stylesheet">'+
  '<link href="'+root+'bootstrap/css/bootstrap-theme.min.css" rel="stylesheet">'+
  '<link href="'+root+'binaryNS.css" rel="stylesheet" type="text/css">'+
  ''
  );

