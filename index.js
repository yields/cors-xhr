
/**
 * Export `XHR`
 */

module.exports = (function(w){
  var XHR = w.XMLHttpRequest;
  var XDM = w.XDomainRequest;
  if ('withCredentials' in new XHR) return XHR;
  if (XDM) return XDM;
})(window);
