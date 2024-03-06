import React from "react";
interface BlogCardProps {
  blogLink: string;
  imageLink: string;
  title: string;
  description: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  blogLink,
  imageLink,
  title,
  description,
}) => {
  return (
    <div className="col-lg-4 mb-5">
      <a className="card lift h-100" href={blogLink} target="_blank">
        <img className="w-full" src={imageLink} alt="release-1.3.0" />
        <div className="card-body">
          <h4 className="card-title mb-2">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-transparent border-top d-flex align-items-center justify-content-between">
          <div className="small text-primary">Read more</div>
          <div className="small text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1={5} y1={12} x2={19} y2={12} />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
