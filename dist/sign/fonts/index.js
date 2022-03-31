const FONT_VARIANTS = {
  Regular: "Regular",
  Bold: "Bold",
  Italic: "Italic",
  BoldItalic: "BoldItalic",
};

const import_font = (url) => {
  const fn = async (variant) => {
    let font = null;
    const font_variant = FONT_VARIANTS[variant] || FONT_VARIANTS.Regular;
    try {
       font = (await import(`!!url-loader!./${url}-${font_variant}.ttf`)).default;
    } catch (e) {
      console.error(e);
    }

    return font;
  };

  return fn;
};

export default {
  Lato: import_font("Lato/Lato"),
  Lora: import_font("Lora/Lora"),
  Montserrat: import_font("Montserrat/Montserrat"),
  NatoSans: import_font("NotoSans/NotoSans"),
  Nunito: import_font("Nunito/Nunito"),
  OpenSans: import_font("OpenSans/OpenSans"),
  Poppins: import_font("Poppins/Poppins"),
  Roboto: import_font("Roboto/Roboto"),
  DancingScript: import_font("DancingScript/DancingScript"),
  ShorelinesScript: import_font("ShorelinesScript/ShorelinesScript"),
};
export { FONT_VARIANTS };

export const SIGNATURE_FONTS = {
  Festive: import_font("SignatureFonts/Festive/Festive"),
  Kalam: import_font("SignatureFonts/Kalam/Kalam"),
  Kristi: import_font("SignatureFonts/Kristi/Kristi"),
  Pangolin: import_font("SignatureFonts/Pangolin/Pangolin"),
  Handlee: import_font("SignatureFonts/Handlee/Handlee"),
  Neucha: import_font("SignatureFonts/Neucha/Neucha"),
  Cookie: import_font("SignatureFonts/Cookie/Cookie"),
  Sacramento: import_font("SignatureFonts/Sacramento/Sacramento"),
  Allura: import_font("SignatureFonts/Allura/Allura"),
  Arizonia: import_font("SignatureFonts/Arizonia/Arizonia"),
  Ballet: import_font("SignatureFonts/Ballet/Ballet"),
  Amita: import_font("SignatureFonts/Amita/Amita"),
  

};