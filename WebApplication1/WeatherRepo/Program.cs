using System;

namespace WeatherRepo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            WeatherGet weather = new WeatherGet();
            weather.GetWeatherCity("London,uk");
        }
    }
}
