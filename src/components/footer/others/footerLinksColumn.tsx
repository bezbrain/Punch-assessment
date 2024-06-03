interface FooterColumnProps {
  columnTitle?: string;
  contentOne?: string;
  contentTwo?: string;
  contentThree?: string;
  contentFour?: string;
}

const FooterLinksColumn = ({
  columnTitle,
  contentOne,
  contentTwo,
  contentThree,
  contentFour,
}: FooterColumnProps) => {
  return (
    <div>
      <h4 className="text-[rgba(255,255,255,0.4)] text-[14px]">
        {columnTitle}
      </h4>

      <div className="mt-6">
        <ul className="text-[rgba(255,255,255,0.6)] space-y-4">
          <li>
            <a href="">{contentOne}</a>
          </li>
          <li>
            <a href="">{contentTwo}</a>
          </li>
          {contentThree && (
            <li>
              <a href="">{contentThree}</a>
            </li>
          )}
          {contentFour && (
            <li>
              <a href="">{contentFour}</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FooterLinksColumn;
