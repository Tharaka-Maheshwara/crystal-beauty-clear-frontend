import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jtcdxbolazgubpgrxndm.supabase.co",
  "sb_publishable_BCOBHPllsxS07rJVUtTLiw_KkrUmeVE",
);

export default function mediaUpload(file) {
  const promise = new Promise((resolve, reject) => {
    if (file == null) {
      reject("No file selected");
      return;
    }

    const timeStamp = new Date().getTime();
    const newFileName = timeStamp + file.name;

    supabase.storage
      .from("images")
      .upload(newFileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then(() => {
        const url = supabase.storage.from("images").getPublicUrl(newFileName)
          .data.publicUrl;
        resolve(url);
      })
      .catch((error) => {
        console.log(error);
        reject("Failed to upload file");
      });
  });

  return promise;
}
