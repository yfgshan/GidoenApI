using System.Net.Http;
using System.Web.Http;
//using RouteAttribute = System.Web.Http.RouteAttribute;

namespace GideonWebApp.Controller
{
    [RoutePrefix("api/account")]
    public class AccountController : ApiController
    {
        [Route("Login")]
        [HttpGet]
       public HttpResponseMessage Login()
        {
            return Request.CreateResponse(System.Net.HttpStatusCode.OK, "test");
        }
    }
}
