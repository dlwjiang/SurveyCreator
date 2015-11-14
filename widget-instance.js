<widget-instance>

  <div>
    <span class="widget-type">{ opts.type }</span>
    <span class="remove-widget" onclick={ remove }>X</span>
  </div>

  <div class='user-input'>    
    <span>
      Question:
      <input type="text" value={ opts.question }>
    </span>
  </div>

  <div class='user-input'>
    <span>
      Options:
      <input type="text" placeholder="Comma separated" value={ opts.options }>
    </span>
  </div>

  <!-- ====== -->
  <!-- Styles -->
  <!-- ====== -->
  
  <style scoped>
    :scope { 
      display: block; 
      width:90%;
      padding:10px;
      margin: 10px;
      background-color: #eee;
    }
    .widget-type {
      color: red;
    }
    .remove-widget {
      float: right;
    }
    .user-input {
      margin: 5px;
    }
    .user-input input {
      width: 80%;
    }
  </style>

  <!-- ===== -->
  <!-- Logic -->
  <!-- ===== -->

  <script >

    remove() {
      this.parent.removeWidget(opts.question);
    }

  </script>

</widget-instance>

