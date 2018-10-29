using System;
using System.Web;
using System.Web.Mvc;
using System.Configuration;


namespace MmseApp.Mmse.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //Fixes the MVC trailing slash problem as described here:  http://stackoverflow.com/questions/24987100/browser-address-will-not-be-displayed-correctly-in-ui-route 
            //without this, www.thisapp.com/appname will end up as www.thisapp.com/appname#/, which is not properly formed for angular routing .  We need to add the trailing slash manually if it's not present to work with angular, so that we get www.thisapp.com/appname/#/  in all cases.

            var root = VirtualPathUtility.ToAbsolute("~/");
            var applicationPath = Request.ApplicationPath;
            var path = Request.Path;
            if (!string.Equals(root, applicationPath, StringComparison.InvariantCultureIgnoreCase) && string.Equals(applicationPath, path, StringComparison.InvariantCultureIgnoreCase))
            {
                return Redirect(root + "#");
            }
            return View();
        }

        public ActionResult Login(string id = "home")
        {
            var basePath = "https://" + Request.Url?.Host + ConfigurationManager.AppSettings["AppBase"];

            return Redirect(basePath + id);

        }
    }
}