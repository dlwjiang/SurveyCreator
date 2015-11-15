<widget-instance>

  <div>
    <span class="widget-type">{ opts.type }</span>
    <span class="remove-widget" onclick={ remove }>x</span>
  </div>

  <div class='user-input'>    
    <span>
      <span class='input-label'>Question:</span>
      <input type="text" 
             value={ opts.question } 
             onkeyup={ editQuestion }>
    </span>
  </div>

  <div class='user-input'>
    <span>
      <span class='input-label'>Options:</span>
      <input type="text" 
             placeholder="Comma separated" 
             value={ opts.options }
             onkeyup={ editOptions }>
    </span>
  </div>
  
  <style scoped>
    :scope { 
      display: block; 
      width:90%;
      padding:5px 10px 10px 10px;
      margin: 10px 10px 10px 0px;
      background-color: #eee;
      border-radius: 8px;
    }
    .widget-type {
      color: #8E0505;
    }
    .remove-widget {
      float: right;
      cursor: pointer;
    }
    .input-label{
      display: inline-block;
      width: 15%;
    }
    .user-input {
      margin: 5px;
    }
    .user-input input {
      width: 80%;
      height: 25px;
      font-size: 12px;
      font-weight: 300;
    }
  </style>

  <script >

    editQuestion(e) {

      //this method doesn't seem right...
      //but change to nested attributes don't seem to propogate
      //to the parent object.
      //TODO: figure out proper way to make data reactive
      var widgets = this.parent.opts.widgets;
      var index = _.findIndex(widgets, function (widget) {
        return widget.question === opts.question;
      })
      widgets[index].question = e.target.value;

    }

    editOptions(e) {
      var widgets = this.parent.opts.widgets;
      var index = _.findIndex(widgets, function (widget) {
        return widget.question === opts.question;
      })
      widgets[index].options = e.target.value;
    }

    remove() {
      this.parent.removeWidget(opts.question);
    }

  </script>

</widget-instance>

