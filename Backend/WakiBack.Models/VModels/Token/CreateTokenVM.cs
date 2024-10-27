

using RunnersApp.DomainModel;
using System.ComponentModel.DataAnnotations;

namespace WakiBack.Models
{
    public class CreateTokenVM : BaseViewModel
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        [EnumDataType(typeof(Logros), ErrorMessage = "Valor inválido. Las opciones válidas son: Balon_de_Oro, Mundial, Champions_League.")]
        public Logros Logros { get; set; }
    }
}
