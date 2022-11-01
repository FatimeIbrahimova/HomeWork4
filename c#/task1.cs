using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double number = 2354;
            double maxDigit = 0;
            double digit = 0;
            while (number > 0)
            {
                digit = number % 10;
                number = (number - (number % 10)) / 10;
                number++;
                if (digit > maxDigit)
                {
                    maxDigit = digit;
                }
                Console.WriteLine(maxDigit);
            }
        }
    }
}
