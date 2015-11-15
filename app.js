<app>

  <section id="widgets">
    <h1>Widgets</h1>
    <div class='add-widget btn' 
         id="add-radio-instance" 
         onclick={addRadio}> ⊕ Radio</div>
    <div class='add-widget btn' 
         id="add-checkbox-instance" 
         onclick={addCheckbox}> ⊕ Input</div>
  </section>

  <section id="composing-area">

    <div>

      <span show={ !previewMode }>
        <span>Title: </span>
        <span><input type="text" value='This Survey of Mine' id='survey-title'/></span>
      </span>

      <span onclick={ showPreview }>
        <span show={ !previewMode } class="preview btn">Preview</span>
        <span show={ previewMode } class="compose btn"> ← Compose</span>
      </span>

    </div>

    <widget-list show={ !previewMode } widgets={ opts.widgets }></widget-list>
    <survey-preview show={ previewMode } data= { previewTemplateData }></survey-preview>

  </section>

  <style scoped>
  h1 {
    margin-top:0px;
    margin-bottom: 5px;
  }
  #add-radio-instance, #add-checkbox-instance {
    font-size: 20px;
    margin-top: 10px;
    width: 80%;
    padding: 5px 5px 5px 0px;
    text-align: center;
  }
  .btn{
    cursor: pointer;
    font-size: 13px;
    background-color: #eee;
    border-radius: 20px;
    width: 120px;
    padding: 5px;
    text-align: center;
  }
  #survey-title {
    width: 70%;
    height: 20px;
  }
  
  </style>

  <script >

    this.previewMode = false;
    this.previewTemplateData = null;

    addRadio() {
      widgetOptions.widgets.push({
        type: 'radio',
        question: 'Choose one.',
        options: 'A,B,C'
      });
    }

    addCheckbox() {
      widgetOptions.widgets.push({
        type: 'checkbox',
        question: 'Select all that apply.',
        options: 'A,B,C'
      });
    }

    showPreview() {
      this.previewMode = !this.previewMode;
      this.previewTemplateData = this._generatePreviewTemplateData();
    }

    //Create data for preview.
    _generatePreviewTemplateData() {

      var surveyTitle = $('#survey-title').val();

      var widgetData = _.map(opts.widgets, function (widget) {
        var widgetClone = $.extend({},widget);
        widgetClone.options = widgetClone.options.split(',');
        return widgetClone;
      })

      return {
        title: surveyTitle,
        widgetData: widgetData
      };

    }

  </script>  

</app>