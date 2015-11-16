<widget-list>

  <div each={widget,i in opts.widgets }>

    <widget-instance 
      widget= { widget }
      index={ i }>
    </widget-instance>  

  </div>
  
</widget-list>