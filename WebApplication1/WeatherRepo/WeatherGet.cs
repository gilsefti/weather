using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;


namespace WeatherRepo
{
    public class WeatherGet
    {
        public string GetWeatherQuery(string query)
        {
            using (var client = new HttpClient())
            {


                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //GET Method  
                RootObject weather = null;
                string url = string.Format("http://api.openweathermap.org/data/2.5/weather?{0}&APPID=eebd83381451a2ff4914d07af807871c", query);
                var response = client.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api   
                    var StateResponse = response.Content.ReadAsStringAsync().Result;

                    //Deserializing the response recieved from web api and storing into the Employee list  
                    weather = JsonConvert.DeserializeObject<RootObject>(StateResponse);
                    return StateResponse;
                }
                return "";
            }
        }
        public string GetWeatherLocation(string lat,string lon)
        {
            string query = string.Format("lat={0}&lon={1}",lat,lon);             
            return GetWeatherQuery(query);
        }
        public string GetWeatherCity(string city)
        {
            string query = string.Format("q={0}", city);
            return GetWeatherQuery(query);
        }

    }
    //public class WeatherDedtails { 

    //}
}
