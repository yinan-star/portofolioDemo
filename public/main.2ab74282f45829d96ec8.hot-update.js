/*! For license information please see main.2ab74282f45829d96ec8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/about/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});var i=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),h=e.n(l),o=e("./app/components/Canvas/about/Media.js");class r{constructor({element:t,geometry:s,gl:e,index:i,scene:l,sizes:h}){this.element=t,this.geometry=s,this.gl=e,this.index=i,this.scene=l,this.sizes=h,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias()}createMedias(){this.mediaElements=this.element.querySelectorAll("about__gallery__media"),this.media=h()(this.mediaElements,((t,s)=>new o.default({element:t,geometry:this.geometry,gl:this.gl,index:s,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,h()(this.medias,(s=>s.onResize(t,this.scroll)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),h()(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if("left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"6afab103110aa70ed385"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYWI3NDI4MmY0NTgyOWQ5NmVjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVFBTWUsTUFBTUEsRUFDbkJDLFdBQUFBLEVBQVksUUFBQ0MsRUFBTyxTQUFFQyxFQUFRLEdBQUVDLEVBQUUsTUFBRUMsRUFBSyxNQUFFQyxFQUFLLE1BQUVDLElBQ2hEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxLQUFNLElBR1JMLEtBQUtNLGNBQ1AsQ0FFQUEsWUFBQUEsR0FDRU4sS0FBS08sY0FBZVAsS0FBS04sUUFBUWMsaUJBQWlCLHlCQUVsRFIsS0FBS1MsTUFBUUMsSUFBSVYsS0FBS08sZUFBZSxDQUFDYixFQUFTRyxJQUN0QyxJQUFJYyxFQUFBQSxRQUFNLENBQ2ZqQixVQUNBQyxTQUFVSyxLQUFLTCxTQUNmQyxHQUFJSSxLQUFLSixHQUNUQyxRQUNBQyxNQUFPRSxLQUFLWSxNQUNaYixNQUFPQyxLQUFLRCxTQUlsQixDQUlBYyxRQUFBQSxDQUFTQyxHQUNQZCxLQUFLZSxPQUFTZixLQUFLTixRQUFRc0Isd0JBRzNCaEIsS0FBS0QsTUFBUWUsRUFBTWYsTUFHbkJDLEtBQUtpQixNQUFRakIsS0FBS2UsT0FBT0UsTUFBUUMsT0FBT0MsV0FBYW5CLEtBQUtELE1BQU1rQixNQUdoRWpCLEtBQUtDLE9BQVMsRUFFZFMsSUFBSVYsS0FBS29CLFFBQVFYLEdBQVNBLEVBQU1JLFNBQVNDLEVBQU9kLEtBQUtDLFNBRXZELENBRUFvQixXQUFBQSxFQUFZLEVBQUVDLEVBQUMsRUFBRUMsSUFDZnZCLEtBQUtDLE9BQU9DLFFBQVNGLEtBQUtDLE1BQzVCLENBRUF1QixXQUFBQSxFQUFZLEVBQUVGLEVBQUMsRUFBRUMsSUFDZixNQUFNRSxFQUFXSCxFQUFFSSxNQUFRSixFQUFFSyxJQUU3QjNCLEtBQUtDLE9BQU9FLE9BQVFILEtBQUtDLE9BQU9DLFFBQVN1QixDQUkzQyxDQUVBRyxTQUFBQSxFQUFVLEVBQUVOLEVBQUMsRUFBRUMsSUFFZixDQUtBTSxNQUFBQSxHQUNPN0IsS0FBS2UsU0FFTmYsS0FBS0MsT0FBT0MsUUFBVUYsS0FBS0MsT0FBT0UsT0FDcENILEtBQUs4QixVQUFZLFFBQ1I5QixLQUFLQyxPQUFPQyxRQUFVRixLQUFLQyxPQUFPRSxTQUMzQ0gsS0FBSzhCLFVBQVksUUFJbkI5QixLQUFLQyxPQUFPQyxRQUFVNkIsRUFBQUEsUUFBS0MsTUFBTUMsWUFBWWpDLEtBQUtDLE9BQU9DLFFBQVNGLEtBQUtDLE9BQU9FLE9BQVFILEtBQUtDLE9BQU9JLE1BR2xHSyxJQUFJVixLQUFLb0IsUUFBUSxDQUFDWCxFQUFPWixLQUV2QixNQUFNcUMsRUFBU3pCLEVBQU0wQixLQUFLQyxNQUFNZCxFQUFJLEVBQ3BDLEdBQXVCLFNBQW5CdEIsS0FBSzhCLFVBQXFCLENBQ2xCckIsRUFBTTBCLEtBQUtFLFNBQVNmLEVBQUlZLEdBRXpCbEMsS0FBS0QsTUFBTWtCLE1BQVEsSUFHMUJSLEVBQU02QixNQUFNaEIsR0FBS3RCLEtBQUt1QyxhQUFhdEIsTUFHbkNSLEVBQU0wQixLQUFLSyxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUdsRSxNQUFNLEdBQXNCLFVBQW5CNUMsS0FBSzhCLFVBQXNCLENBQ3hCckIsRUFBTTBCLEtBQUtFLFNBQVNmLEVBQUlZLEVBQzNCbEMsS0FBS0QsTUFBTWtCLE1BQVEsSUFDeEJSLEVBQU02QixNQUFNaEIsR0FBS3RCLEtBQUt1QyxhQUFhdEIsTUFDbkNSLEVBQU0wQixLQUFLSyxTQUFTQyxFQUFHVixFQUFBQSxRQUFLQyxNQUFNVSxPQUFrQixLQUFWQyxLQUFLQyxHQUFvQixJQUFWRCxLQUFLQyxJQUdsRSxDQUlBbkMsRUFBTW9CLE9BQU83QixLQUFLQyxPQUFPLElBRzdCLGtCQ3pIRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvYWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG4gIGNvbnN0cnVjdG9yKHtlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXN9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2l6ZXMgPSBzaXplc1xuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50IDowLFxuICAgICAgdGFyZ2V0IDowLFxuICAgICAgbGFzdCA6MCxcbiAgICAgIGxlcnA6IDAuMVxuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlTWVkaWFzKClcbiAgfVxuXG4gIGNyZWF0ZU1lZGlhcygpe1xuICAgIHRoaXMubWVkaWFFbGVtZW50cyA9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Fib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cbiAgICB0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IE1lZGlhKHtcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgc2NlbmU6IHRoaXMuZ3JvdXAsXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzXG4gICAgICB9KTtcblxuICAgIH0pXG4gIH1cbi8qKlxuICogRXZlbnRzLlxuICovXG4gIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyDojrflj5blhYPntKDnmoTkvY3nva7lkozlsLrlr7hcblxuICAgIHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuICAgIC8vIOWxj+W5leeahOWwuuWvuO+8jOe7mXVwZGF0ZeiAjOS4jeaYr+eUu+W4g+eahFxuXG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGggKiB0aGlzLnNpemVzLndpZHRoXG4gICAgLy8g6K6h566X5b2T5YmN55S75buK55qE5a695bqm5Y2g6KeG56qX5Y+j55qE5a695bqm55qE5aSa5bCR54S25ZCO5LmY5Lul5YW35L2T55qE5a695bqmLS0+5bCG5YWD57Sg5Zyo6KeG5Y+j5Lit55qE5q+U5L6L6L2s5o2i5Li65YW35L2T55qE5a6e6ZmF5a695bqm44CC5ZON5bqU5byP5biD5bGAXG5cbiAgICB0aGlzLnNjcm9sbCA9IDBcblxuICAgIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuICB9XG5cbiAgb25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50PSB0aGlzLnNjcm9sbFxuICB9XG5cbiAgb25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID10aGlzLnNjcm9sbC5jdXJyZW50IC1kaXN0YW5jZVxuICAgIC8vIOWmguaenOm8oOagh+WSjOWbvueJh+eahOenu+WKqOebuOWPjeaWueWQke+8jOimgeeUqOWHj+WPt1xuXG5cbiAgfVxuXG4gIG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXG4gIH1cblxuXG5cbiAgLy8gVXBkYXRlXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuICAgIC8vIOajgOa1i+m8oOagh+a7muWKqOaWueWQke+8jOW9k+WJjeS9jee9ruWSjOWFiOWJjeS9jee9ruWBmuavlOi+g+OAglxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCB0aGlzLnNjcm9sbC5sZXJwKVxuICAgIFxuXG4gICAgbWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgLy8gRm9yIFggYXhpc1xuICAgICAgY29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdCcpe1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG4gICAgICAgIC8vIOWFg+e0oOeahHjkvY3nva4r6L+Z5Liq5YWD57Sg55qE5LiA5Y2K55qE5a695bqm77yM5bCx5piv56ys5LiA5Liq5YWD57Sg55qE5pyA5Y+z6L656L6555WM77yM6L+Z5Liq6L6555WM5bCP6Zuo5bGP5bmV55qE5pyA5bem6L6555qE6L6555WM5bCx5piv5Zu+54mHb3V0IG9mIHBpY3R1cmVcbiAgICAgICAgaWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcbiAgICAgICAgICAvLyDooajnpLrlsY/luZXlrr3luqbnmoTkuIDljYrjgILlsIblhbblj5botJ/lgLznmoTljp/lm6DmmK/vvIzpgJrluLjmg4XlhrXkuIvlsY/luZXlt6bkvqfovrnnlYznmoTlnZDmoIflgLzmmK/otJ/nmoTvvIzogIzlsY/luZXlj7PkvqfovrnnlYzmmK/mraPnmoTjgIJcbiAgICAgICAgICAvLyDmo4Dmn6XnrKzkuIDkuKrlqpLkvZPlhYPntKDnmoTkvY3nva7mmK/lkKbotoXlh7rlsY/luZXlt6bkvqfovrnnlYxcbiAgICAgICAgICBtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG4gICAgICAgICAgLy8g5b2T55So5oi35b6A5bem6L655ou977yM5bm25LiU56e75Ye65Y675ZCO77yM6KaB5bCG5a6D5pS+5Yiw5pyA5Y+z6L656K6p5LuW5LuO5Y+z6L656L+b5p2l77yMIOi+vuaIkOS4gOS4quW+queOryzlsLHmmK/nrKzkuIDkuKrlhYPntKDnmoRY57Sv5Yqg5LiK5pW05Liq55S75buK55qE5a695bqm77yM5bCx5Yiw5LqG5pyA5Y+z6L65XG4gICAgICAgICAgLy8g55u45a+55LqO5a+56LGh6Ieq6Lqr55qE5Lit5b+D6L205oiW6ICF5Y6f54K555qE5L2N572u77yM5Lmf5bCx5piv6K+0bG9jYWwgcG9zaXRpb25cbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgXG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKXtcbiAgICAgICAgY29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuICAgICAgICBpZih4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpe1xuICAgICAgICAgIG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcbiAgICAgICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPUdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMyxNYXRoLlBJICogMC4wMylcbiAgICAgICAgfVxuICAgICAgICAgLy8g6L+Z5Liq5YWD57Sg55qE5bem6L656L6555WM5aSn5LqO5bGP5bmV5pyA5Y+z6L65LOWwseenu+WIsOWJjemdouadpVxuICAgICAgfVxuXG4gICAgIFxuXG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG4gICAgfSlcbiAgICAvLyDkvKDnu5ltZWRpYeaWh+S7tlxuICB9XG5cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YWZhYjEwMzExMGFhNzBlZDM4NVwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJtZWRpYUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhIiwibWFwIiwiTWVkaWEiLCJncm91cCIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYXMiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInV0aWxzIiwiaW50ZXJwb2xhdGUiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiZ2FsbGVyeVNpemVzIiwicm90YXRpb24iLCJ6IiwicmFuZG9tIiwiTWF0aCIsIlBJIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9