import SvgIcon from '@material-ui/core/SvgIcon';

const ArrowNextSvg = () => (
  <>
    <g transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 492 492)">
      <g>
        <g>
          <path
            d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
        </g>
      </g>
    </g>
  </>
);

const ArrowNext = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 492 492"
    xmlSpace="preserve"
    style={{ enableBackground: 'new 0 0 492 492' }}
    {...props}>
    <ArrowNextSvg />
  </SvgIcon>
);

export default ArrowNext;
