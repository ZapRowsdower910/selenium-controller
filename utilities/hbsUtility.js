var publicMethods = {
  equals: function(a, b, opts) {
    if(a == b){
        return opts.fn(this);
    }else{
        return opts.inverse(this);
    }
  },
  section: function(name, options){
    if(!this._sections) this._sections = {};
    this._sections[name] = options.fn(this);
    return null;
  },
  loadHelpers: function(Handlebars){
    Handlebars.registerHelper('section', publicMethods.section);
    Handlebars.registerHelper('equals', publicMethods.equals);
  }
}

module.exports = publicMethods;