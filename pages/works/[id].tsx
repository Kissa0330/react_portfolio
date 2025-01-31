import { useRouter } from "next/router";
import styles from "../../styles/work.module.scss";
import works from "../../public/works.json";
import Image from "next/image";

const Work = () => {
  const router = useRouter();
  const { id } = router.query;
  const target: any = works.find((work) => work.id === id);
  return (
    <div>
      <div className={styles.work_div_title_box}>
        <h1 className={styles.work_h1_title_text}>{target?.title}</h1>
      </div>
      <div className={styles.work_div_info_wrap}>
        <div className={styles.work_div_info_right}>
          <div className={styles.work_div_info_time}>
            <div className={styles.work_div_info_time_title}>制作時期</div>
            <div className={styles.work_div_info_time_content}>
              {target?.time}
            </div>
          </div>
          {target?.github_url != "none" && (
            <div className={styles.work_div_info_github}>
              <div className={styles.work_div_info_github_title}>Github</div>
              <a
                className={styles.work_a_info_github_content}
                href={target?.github_url}
                target="_blank"
                rel="noopener noreferrer" 
              >
                URL
              </a>
            </div>
          )}
        </div>
        <div className={styles.work_div_info_left}>
          {target?.url != "none" && (
            <a
              className={styles.work_a_visit_text}
              href={target?.url}
              target="_blank"
              rel="noopener noreferrer" 
            >
              <div className={styles.work_div_visit_box}>visit site</div>
            </a>
          )}
        </div>
      </div>
      <p className={styles.work_p_content}>{target?.content}</p>
      <Image
      className={styles.work_img}
        style={{
          height: "auto",
          maxWidth: "100%",
        }}
        src={target?.image}
        alt="works photo"
        width={854}
        height={512}
        priority
      />
    </div>
  );
};

export default Work;
