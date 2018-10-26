using System;
using System.Web;
using System.Web.Mvc;

namespace Mmse.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //Fixes the MVC trailing slash problem as described here:  http://stackoverflow.com/questions/24987100/browser-address-will-not-be-displayed-correctly-in-ui-route 
            //without this, app.cmich.edu/appname will end up as app.cmich.edu/appname#/, which is not properly formed for angular routing .  We need to add the trailing slash manually if it's not present to work with angular, so that we get app.cmich.edu/appname/#/  in all cases.

            var root = VirtualPathUtility.ToAbsolute("~/");
            var applicationPath = Request.ApplicationPath;
            var path = Request.Path;
            if (!string.Equals(root, applicationPath, StringComparison.InvariantCultureIgnoreCase) && string.Equals(applicationPath, path, StringComparison.InvariantCultureIgnoreCase))
            {
                return Redirect(root + "#");
            }
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}