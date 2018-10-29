This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

 *  To start the project just run: "npm install" followed by "npm start".
 
 * This project was made having efficiency in mind. That is why I tried to declare every variable used
trying to explicitly describe what each one does. I also tried to describe functions purposes on the comments below.
This code was built also having in mind an automated test enviroment so tags were used for the exact purpose they were created.
Therefore buttons are buttons and not links(<a></a>).

* In addition, I tried to avoid nesting loops even though I had a little time to think of an API format that would not require it.
For that reason I had to implement it in certain parts for the code - unfortuantely.
* To filter the search you can always click on a button (Hospedes, Comodidades, Preço, Ratings) to filter accordingly.
the "Datas" button was NOT implemented.
* To remove a filter just click Limpar and then Apply. 
* The object created below was a representation of an API get request.
* The Ratings are not supposed to be changed since they would come from the server with the average of ratings people rated on some other part - not built - of the website
* You can search for countries such as: "Estados Unidos da América", "Brasil", "Holanda", México", "Nova Zelândia", "Australia"
* To remove the check symbol, click on "Limpar"

Points of improvement: 
* Could have standardized the "API data" instead of creating a new array every filter apply
* Could have created more objects instead of single variables. This way the application has many variables being passed through props.
* When Filtering Conveniences, it only shows the result if the hotel offers exactly what the customer ordered. It should be improved to filter properly by filtering what he/she ordered but also showing other options.
* Filtered by Country. Could have created a filter by cities as well.
* Remove check symbol without having to click "Limpar"

Thank you for this amazing challenge!
