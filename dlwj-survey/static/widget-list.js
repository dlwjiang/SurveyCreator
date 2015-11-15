<widget-list>

  <div each={widget in opts.widgets}>

    <widget-instance 
      type={widget.type} 
      question={widget.question} 
      options={widget.options}>
    </widget-instance>  

  </div>

  <script>

  removeWidget(question) {
    var index = _.findIndex(opts.widgets, function (widget) {
      return widget.question === question;
    })
    opts.widgets.splice(index,1);
  }

  </script>
  
</widget-list>