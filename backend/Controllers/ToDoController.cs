using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        private readonly ILogger<ToDoController> _logger;

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ContentResult Get()
        {
            return Content("[{\"ItemName\":\"Dishes\", \"complete\":\"false\"}, {\"ItemName\":\"vacumm\", \"complete\":\"true\"}]", "application/json");
        }

        [HttpPost]
        public string Post(string inVal)
        {
            return "Got to post";
        }

        [HttpDelete]
        public string Delete(string inVal)
        {
            return "got to delete";
        }
    }
}
