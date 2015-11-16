<widget-instance>

  <div>
    <span class='widget-type'>{ opts.widget.type }</span>
    <span class='remove-widget' onclick={ remove }>x</span>
  </div>

  <div class='user-input'>    
    <span>
      <span class='input-label'>Question:</span>
      <input type='text' 
             value={ opts.widget.question } 
             onkeyup={ editQuestion }>
    </span>
  </div>

  <div class='user-input'>
    <span>
      <span class='input-label'>Options:</span>
      <input type='text' 
             placeholder='Comma separated' 
             value={ opts.widget.options }
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
      opts.widget.question = e.target.value;
    }

    editOptions(e) {
      opts.widget.options = e.target.value;
    }

    remove() {
      var widgets = this.parent.opts.widgets;
      widgets.splice(opts.index,1);
    }

  </script>

</widget-instance>

