import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <div class="typeform-widget" data-url="https://form.typeform.com/to/tQ9iOPBc?typeform-medium=embed-snippet" style="width: 100%; height: 500px;"></div> 
          <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
        </div>
      </div>
    );
  }
}