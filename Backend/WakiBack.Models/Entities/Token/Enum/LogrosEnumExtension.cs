using System.ComponentModel;
using System.Reflection;

namespace WakiBack.Models;
public static class EnumExtensions
{
    public static string GetEnumDescription(this Enum value)
    {
        FieldInfo field = value.GetType().GetField(value.ToString());
        if (field != null)
        {
            var attribute = field.GetCustomAttribute<DescriptionAttribute>();
            if (attribute != null)
            {
                return attribute.Description;
            }
        }
        return value.ToString();
    }
}