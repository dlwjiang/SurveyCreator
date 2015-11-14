<widget-list>

  <div each={opts.widgets}>

    <widget-instance 
      type={type} 
      question={question} 
      options={options}>
    </widget-instance>  

  </div>

  <script>

  removeWidget(question) {
    var index = -1;
    for (var i = 0; i < opts.widgets.length; i++) {
      if (opts.widgets[i].question === question) {
        index = i;
      }
    }
    opts.widgets.splice(index,1);
  }

  </script>
  
</widget-list>