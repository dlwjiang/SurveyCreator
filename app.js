<app>

  <div id="widgets">
    <div>Widgets</div>
    <div>Radio Btn</div>
    <div>Input Btn</div>
  </div>

  <div id="composing-area">

    <div>
      <span>
        <span>Title</span>
        <span>Input</span>
      </span>
      <span>
        Preview Button
      </span>
    </div>

    <widget-list widgets={ opts.widgets }></widget-list>

    <div id="add-radio-instance" onclick={addRadio}>Add Radio</div>
    <div id="add-checkbox-instance" onclick={addCheckbox}>Add Checkbox</div>

  </div>

  <script >

    addRadio() {
      widgetOptions.widgets.push({
        type: 'Radio',
        question: '',
        options: ''
      });
    }

    addCheckbox() {
      widgetOptions.widgets.push({
        type: 'Checkbox',
        question: '',
        options: ''
      });
    }

  </script>  

</app>