using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeatherRepo;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        [HttpGet("bycity/{city}")]
        [HttpGet]
        public ActionResult<string> GetByCity(string city)
        {
            WeatherGet weather = new WeatherGet();
            string result = weather.GetWeatherCity(city);
            return result;
        }
        [HttpGet("byloc/{lat}/{lon}")]
        [HttpGet]
        public ActionResult<string> GetByLocation(string lat,string lon)
        {
            WeatherGet weather = new WeatherGet();
            string result = weather.GetWeatherLocation(lat,lon);
            return result;
        }
        [HttpGet]
        public ActionResult<string> GetByCity()
        {
            WeatherGet weather = new WeatherGet();
            string result = weather.GetWeatherCity("London,uk");
            return result;
        }
    }
}