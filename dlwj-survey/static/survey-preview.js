<survey-preview>

  <h1 id='title'>
    { opts.data.title || "No Title" }
  </h1>

  <div id='questions'>

    <div class='question' each={ widget in opts.data.widgetData }>

      <h2>{ widget.question }</h2>

      <!-- Radio/Checkboxes -->
      <div>

        <div each={ option in widget.options}>
          <span>
            <input type={ widget.type === 'radio' ? 'radio' : 'checkbox'}
                   name={ widget.question }
                   value={ option}/>
          </span>
          <span>{ option }</span>
        </div>
        
      </div

  </div>

  <style scoped>
    .question { 
      display: block; 
      width:90%;
      padding:10px;
      margin: 10px;
      background-color: #eee;
      border-radius: 8px;
    }
    h1{ 
      font-size: 40px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h2{
      margin-bottom: 7px;
      margin-top: 0px;
      font-weight: 300;
    }
  </style>

  <script >


  </script>

</survey-preview>