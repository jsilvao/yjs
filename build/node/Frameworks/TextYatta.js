(function(){var e,t,n,r;r=require("../Types/TextTypes"),t=require("../HistoryBuffer"),e=require("../Engine"),n=function(){function n(n,i){var o,p,s,u,c,a,d,h;this.HB=new t(n),c=r(this.HB),this.types=c.types,this.engine=new e(this.HB,c.parser),this.connector=new i(this.engine,this.HB,c.execution_listener,this),p=this.HB.addOperation(new this.types.Delimiter({creator:"_",op_number:"_beginning"},void 0,void 0)),s=this.HB.addOperation(new this.types.Delimiter({creator:"_",op_number:"_end"},p,void 0)),p.next_cl=s,p.execute(),s.execute(),u=new this.types.Word({creator:"_",op_number:"_"},p,s),this.HB.addOperation(u).execute(),h={creator:"_",op_number:"RM"},a={creator:"_",op_number:"_RM_beginning"},d={creator:"_",op_number:"_RM_end"},o=this.HB.addOperation(new this.types.Delimiter(a,void 0,d)).execute(),s=this.HB.addOperation(new this.types.Delimiter(d,o,void 0)).execute(),this.root_element=this.HB.addOperation(new this.types.ReplaceManager(void 0,h,o,s)).execute(),this.root_element.replace(u,{creator:"_",op_number:"Replaceable"})}return n.prototype.getSharedObject=function(){return this.root_element.val()},n.prototype.getEngine=function(){return this.engine},n.prototype.getConnector=function(){return this.connector},n.prototype.getHistoryBuffer=function(){return this.HB},n.prototype.getUserId=function(){return this.HB.getUserId()},n.prototype.val=function(){return this.getSharedObject().val()},n.prototype.insertText=function(e,t){return this.getSharedObject().insertText(e,t)},n.prototype.deleteText=function(e,t){return this.getSharedObject().deleteText(e,t)},n.prototype.bind=function(e){return this.getSharedObject().bind(e)},n.prototype.replaceText=function(e){return this.getSharedObject().replaceText(e)},n.prototype.on=function(){var e;return(e=this.root_element).on.apply(e,arguments)},n}(),module.exports=n,"undefined"!=typeof window&&null!==window&&(null==window.Y&&(window.Y={}),window.Y.TextYatta=n)}).call(this);
//# sourceMappingURL=../Frameworks/TextYatta.js.map