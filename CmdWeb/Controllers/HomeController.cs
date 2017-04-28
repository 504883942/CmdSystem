using CSRedis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CmdWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string password)
        {
            using (RedisClient rc = new RedisClient("120.25.241.176"))
            {
                rc.Auth("bmc!1234+");
                if (rc.Get("password") != password) {
                    return HttpNotFound();
                }
                return View();
            }
            
        }

        public JsonResult History() {
            JsonResult r = new JsonResult();
            return r;
        }
        public JsonResult Info()
        {
            JsonResult r = new JsonResult();
            return r;
        }
        public JsonResult Run()
        {
            JsonResult r = new JsonResult();
            return r;
        }
    }
}