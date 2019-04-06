// * Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

// * Register for an API Key.

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

// * Experiment with console logging various fields.

//class for displaying results is: .results_display


/// 
// articlesearch.json?q={query}&fq={filter}  

function makeArticle(articleObj) {
    return `
    <div class="border-solid">
    <div> 
        <h1>
        ${articleObj.headline.print_headline}
        </h1>
    </div>
    <br>
    <div>
        ${articleObj.lead_paragraph}
    </div>
    <br>
    <div>
    <a  href="${articleObj.web_url}">Source</a>
    </div>
    <br>
    </div>
  `
}
/*
$("#btn_clear").on("click", function() {
  clicking clear results emptys div #top articles
  
  
})

*/
$("#btn_submit").on("click", function() {


    var userSearchInput = $("#user_search").val();
    console.log(userSearchInput);
    
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+userSearchInput+"&api-key=HAy51O0pkkpBv77CYG2i823dT5nJ8KQq"  ;
    //
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(fullResponse){
        console.log(fullResponse.response.docs[0]);

    
        $(".results_display").html(fullResponse.response.docs.map(makeArticle));
        
        

        

      
      });
  });

