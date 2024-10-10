using System.Net;


namespace WakiBack.Models
{
    public class ValidationResponse
    {
        public bool Failed { get; set; }
        public HttpStatusCode HttpStatusCode { get; set; }
        public string ReasonPhrase { get; set; }
    }
}
