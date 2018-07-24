//'use strict';

/*

    How to use this:

    <StringAvatar 
    name="Andres Soria"
    size={48}
    radius={5}
    />

*/

/*
<ng-avatar 
initials="{{ event.event_context.Username }}" 
upper-case="true" 
img-class="image-class" 
wrapper="false" 
max-length="1" 
width="40" 
corner-radius="3" 
class="left" 
auto-color="true" 
font-weight="500" 
font-scale="120"></ng-avatar>
*/

//import React from 'react';
//import React, { PropTypes, Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';

class StringAvatar extends React.Component {

    //static displayName = 'StringAvatar';

/*
    initials: null,
    wrapper: true,
    bgColor: "#000",
    textcolor: "#fff",
    pictureResolution: 50, //256,
    width: 60,
    pixelated: false,
    //imgStyling: "vertical-align:top;",
    roundShape: false,
    //wrapper_styling: "border-radius:0; display:block; overflow:hidden;",
    //extraClasses: "",
    //extraImgClasses: "",
    //extraStyles: "",
    cornerRadius: "0",
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7", "#6f7b87", "#2c3e50", "#2f3193", "#662d91", "#922790", "#ec2176", "#ed1c24", "#f36622", "#f8941e", "#fab70f", "#fdde00", "#d1d219", "#8ec73f", "#00a650", "#00aa9c", "#00adef", "#0081cd", "#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    //imgWidth: "100%",
    upperCase: false,
*/

    _renderImage() {
 
        var _long = 45,
            _picture_resolution = 256,
            _wrapper = true,
            _str = "", //scope.initials || "",
            _bgColor = "#000",
            _textcolor = "#fff",
            _pixelated = false,
            _img_styling = { verticalAlign: 'top' },
            _roundShape = false,
            _wrapper_styling = "border-radius:0; display:block; overflow:hidden;",
            _extra_classes = "",
            _extra_img_classes = "",
            _extra_styles = "",
            _corner_radius = "0",
            _picture_format = "png",
            _colors_palette = ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
            _autoColor = false,
            _font_weight = 100,
            _font_scale = 100,
            _text_shadow = false,
            _bind = false,
            _img_width = "100%",
            _upperCase = false;

            // var myObj = {};
            // myObj._long = 45,
            // myObj._picture_resolution = 256,
            // myObj._wrapper = true,
            // myObj._str = "", //scope.initials || "",
            // myObj._bgColor = "#000",
            // myObj._textcolor = "#fff",
            // myObj._pixelated = false,
            // myObj._img_styling = { verticalAlign: 'top' },
            // myObj._roundShape = false,
            // myObj._wrapper_styling = "border-radius:0; display:block; overflow:hidden;",
            // myObj._extra_classes = "",
            // myObj._extra_img_classes = "",
            // myObj._extra_styles = "",
            // myObj._corner_radius = "0",
            // myObj._picture_format = "png",
            // myObj._colors_palette = ["#bdc3c7","#6f7b87","#2c3e50","#2f3193","#662d91","#922790","#ec2176","#ed1c24","#f36622","#f8941e","#fab70f","#fdde00","#d1d219","#8ec73f","#00a650","#00aa9c","#00adef","#0081cd","#005bab"],
            // myObj._autoColor = false,
            // myObj._font_weight = 100,
            // myObj._font_scale = 100,
            // myObj._text_shadow = false,
            // myObj._bind = false,
            // myObj._img_width = "100%",
            // myObj._upperCase = false;

        // -----------------------------
        // utility functions
        // -----------------------------

        function generateAvatar(name, w, h, bgColor, textcolor, bgImage, props) {

            var WIDTH = 256,
                HEIGHT = 256,
                canvas,
                ctx,
                font_size;

            console.log("w:", w);
            console.log("h:", h);
            console.log("name:", name);

            if (w != undefined && w > 0) {
                if (h != undefined && h > 0) {
                    WIDTH = w;
                    HEIGHT = h;
                }
            }

            canvas = document.createElement('canvas');
            canvas.id = "ngAvatar-" + Date.now();
            canvas.width = WIDTH;
            canvas.height = HEIGHT;

            ctx = canvas.getContext('2d');
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            console.log("props.pictureFormat:", props.pictureFormat );

            var _default = {
                fontWeight: 100,
                fontScale: 100,
                //str: "J",
                //pictureFormat: "png" // this.props.pictureFormat //"png"
                pictureFormat: props.pictureFormat
            };

            //var str = getInitialsFromString(name); //"Try This!");
            var str = name;

            console.log("str-2:", str);

            font_size = WIDTH / (2 / (_default.fontScale / 100));

            console.log("font_size:", font_size);

            ctx.font = _default.fontWeight + " " + font_size + "px sans-serif";

            if (_default.textShadow === true) {
                ctx.shadowColor = "black";
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 5;
            }

            ctx.textAlign = "center";
            ctx.fillStyle = textcolor;
            //ctx.fillText(_str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (_default.font_size / 3) + 5 );
            ctx.fillText(str, WIDTH / 2, HEIGHT - (HEIGHT / 2) + (font_size / 3));

            return canvas.toDataURL("image/" + _default.pictureFormat);
        }

        function getInitialsFromString(str) {

            //return str

            console.log("str-1:", str );

            if (!str) return ""

            var output = "",
                i = 0,
                str = str.split(" "),
                len = str.length;

                console.log("len:", len );

            for (i; i < len; i++) if (str[i] != "") output += str[i][0]; //.toUpperCase();

            return output;
        }

        // -----------------------------
        // checkValues
        // -----------------------------
        
        console.log("this.props:", this.props);

        if (this.props.textColor != undefined) {
            _textcolor = this.props.textColor;
        }

        // Create text to be shown

        // if (this.props.style != undefined) {
        //     _extra_styles = this.props.style;
        // }
        
        if (this.props.initials != undefined) {
            _str = this.props.initials;
        }
 
        if (this.props.string != undefined) {
            _str = getInitialsFromString( this.props.string );
        }

        if (this.props.maxLength != undefined) {
            _str = _str.substr(0, this.props.maxLength );
        }

        // if (this.props.pictureFormat === 'jpeg') {
        //     _picture_format = "jpeg";
        // }

        // Calculate color

        if (this.props.bgColor != undefined) {
            _bgColor = this.props.bgColor;
        } else {

            if (this.props.autoColor != undefined) {

                _autoColor = this.props.autoColor;
                if ( _autoColor === true ) {
                    var i, lon = _str.length, charIndex=0,colorIndex;
                    for(i=0; i<lon;i++) charIndex = _str.charCodeAt(i);
                    colorIndex = charIndex % _colors_palette.length;
                    _bgColor = _colors_palette[ colorIndex ];
                }
            }                     
        }

        // --------------------------
        // Create the image here
        // --------------------------

        var imgData = generateAvatar(
            _str,
            this.props.pictureResolution,
            this.props.pictureResolution,
            _bgColor, //this.props.bgColor,
            _textcolor, //this.props.textcolor,
            null,
            this.props
        );

        // ------------------------------------------
        // Create HTML and styles wraping the image
        // ------------------------------------------

        var _img_styling = { imageRendering: 'pixelated', imageRendering: '-moz-crisp-edges' };

        var _pixelated = this.props.pixelated;
        if ( _pixelated === true ) { 
            _img_styling.imageRendering = "pixelated"; 
            //_img_styling.imageRendering = "-moz-crisp-edges";
        }

        /*

        var _wrapper_styling_default = { overflow: 'hidden', width: this.props.width, height: this.props.width };
        var  _wrapper_styling;

        //_wrapper_styling.overflow.writable = true;

        console.log("OO _wrapper_styling:", _wrapper_styling );
        console.log("OO this.props.style:", this.props.style );

        if (this.props.style != undefined) {
            //_extra_styles = this.props.style;
            _wrapper_styling = Object.assign(this.props.style, _wrapper_styling_default);
        } else {
            _wrapper_styling = _wrapper_styling_default;
        }
        */

        if (this.props.style != undefined) {
            var _wrapper_styling = Object.assign({ overflow: 'hidden', width: this.props.width, height: this.props.width }, this.props.style);
        }

        if (this.props.roundShape === true) {
            console.log("-2");
            _wrapper_styling.borderRadius = this.props.width +"px";
        } else {
            console.log("-6");
            if ( this.props.cornerRadius != undefined ){
                console.log("-7");
                _corner_radius = this.props.cornerRadius;
                _wrapper_styling.borderRadius = _corner_radius +"px";
            }
        }

        var imgHtml = <img src={imgData} style={ _img_styling} width={this.props.width} height="" />

        if ( this.props.wrapper ) {
            return <div className="avatar-wrapper " style={ _wrapper_styling } >{ imgHtml }</div>
        } else {
            return imgHtml
        }

    } //this.props.renderImage ends here.

    render() { 
        return this._renderImage();
    }

}

StringAvatar.propTypes = {
    initials: PropTypes.string,
    //width: PropTypes.string,
    wrapper: PropTypes.bool,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    pictureResolution: PropTypes.number,
    width: PropTypes.number,
    pixelated: PropTypes.bool,
    roundShape: PropTypes.bool,
    //class: PropTypes.string, //*
    //imgClass: PropTypes.string, //*
    style: PropTypes.object,
    string: PropTypes.string,
    cornerRadius: PropTypes.number,
    pictureFormat: PropTypes.string,
    colorsPalette: PropTypes.array,
    autoColor: PropTypes.bool,
    fontWeight: PropTypes.number,
    fontScale: PropTypes.number,
    textShadow: PropTypes.bool,
    bind: PropTypes.bool,
    maxLength: PropTypes.number,
    upperCase: PropTypes.bool,
};

StringAvatar.defaultProps = {
    initials: null,
    wrapper: true,
    bgColor: "#000",
    textcolor: "#fff",
    pictureResolution: 50, //256,
    width: 60,
    pixelated: false,
    //imgStyling: "vertical-align:top;",
    roundShape: false,
    //wrapper_styling: "border-radius:0; display:block; overflow:hidden;",
    //extraClasses: "",
    //extraImgClasses: "",
    //extraStyles: "",
    style: {},
    string: null,
    cornerRadius: 0,
    pictureFormat: "png",
    colorsPalette: ["#bdc3c7", "#6f7b87", "#2c3e50", "#2f3193", "#662d91", "#922790", "#ec2176", "#ed1c24", "#f36622", "#f8941e", "#fab70f", "#fdde00", "#d1d219", "#8ec73f", "#00a650", "#00aa9c", "#00adef", "#0081cd", "#005bab"],
    autoColor: false,
    fontWeight: 100,
    fontScale: 100,
    textShadow: false,
    bind: false,
    //imgWidth: "100%",
    maxLength: undefined,
    upperCase: false,
};

export default StringAvatar;